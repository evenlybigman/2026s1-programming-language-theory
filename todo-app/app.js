(function () {
  "use strict";

  var STORAGE_KEY = "daily-todo-items";

  var form = document.getElementById("add-form");
  var input = document.getElementById("todo-input");
  var dueInput = document.getElementById("todo-due");
  var listPending = document.getElementById("todo-list-pending");
  var listCompleted = document.getElementById("todo-list-completed");
  var emptyPending = document.getElementById("empty-pending");
  var emptyCompleted = document.getElementById("empty-completed");
  var emptyState = document.getElementById("empty-state");

  var editingId = null;

  var ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

  function normalizeDueDate(value) {
    if (typeof value !== "string" || !ISO_DATE.test(value)) return null;
    return value;
  }

  function parseLocalDay(ymd) {
    var p = ymd.split("-");
    return new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
  }

  function startOfToday() {
    var t = new Date();
    t.setHours(0, 0, 0, 0);
    return t;
  }

  function formatDueLabel(ymd) {
    if (!ymd) return "";
    var d = parseLocalDay(ymd);
    return d.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  function isOverdue(ymd, completed) {
    if (completed || !ymd) return false;
    var due = parseLocalDay(ymd);
    due.setHours(0, 0, 0, 0);
    return due < startOfToday();
  }

  function loadTodos() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      var parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed
        .filter(function (item) {
          return item && typeof item.id === "string" && typeof item.text === "string";
        })
        .map(function (item) {
          return {
            id: item.id,
            text: item.text,
            completed: Boolean(item.completed),
            dueDate: normalizeDueDate(item.dueDate),
          };
        });
    } catch (e) {
      return [];
    }
  }

  function saveTodos(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }

  function uid() {
    return "t-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 9);
  }

  function comparePendingByDue(a, b) {
    var ad = a.dueDate;
    var bd = b.dueDate;
    if (!ad && !bd) return 0;
    if (!ad) return 1;
    if (!bd) return -1;
    return ad.localeCompare(bd);
  }

  function focusEditField(textEl) {
    requestAnimationFrame(function () {
      textEl.focus();
      textEl.select();
    });
  }

  function createTodoRow(todo) {
    var isEditing = todo.id === editingId;

    var li = document.createElement("li");
    li.className = "todo-item" + (isEditing ? " todo-item--editing" : "");
    li.dataset.id = todo.id;

    var cb = document.createElement("input");
    cb.type = "checkbox";
    cb.className = "todo-check";
    cb.checked = todo.completed;
    cb.disabled = isEditing;
    cb.setAttribute("aria-label", todo.completed ? "예정으로 되돌리기" : "완료로 표시");
    cb.addEventListener("change", function () {
      if (editingId) return;
      var next = loadTodos();
      var t = next.find(function (x) {
        return x.id === todo.id;
      });
      if (t) {
        var nowCompleted = cb.checked;
        t.completed = nowCompleted;
        saveTodos(next);
        render(next);
        var targetId = nowCompleted ? "completed-section" : "pending-section";
        var target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }
    });

    var main = document.createElement("div");
    main.className = "todo-item-main";

    if (isEditing) {
      var editWrap = document.createElement("div");
      editWrap.className = "todo-item-edit";

      var textField = document.createElement("input");
      textField.type = "text";
      textField.className = "todo-edit-text";
      textField.value = todo.text;
      textField.maxLength = 500;
      textField.setAttribute("aria-label", "할 일 내용");

      var dueRow = document.createElement("div");
      dueRow.className = "todo-edit-due-row";
      var dueLab = document.createElement("label");
      dueLab.className = "due-label";
      dueLab.htmlFor = "edit-due-" + todo.id;
      dueLab.textContent = "마감";
      var dueField = document.createElement("input");
      dueField.type = "date";
      dueField.id = "edit-due-" + todo.id;
      dueField.className = "todo-due-input";
      dueField.value = todo.dueDate || "";
      dueRow.appendChild(dueLab);
      dueRow.appendChild(dueField);

      var editActions = document.createElement("div");
      editActions.className = "todo-edit-actions";

      var saveBtn = document.createElement("button");
      saveBtn.type = "button";
      saveBtn.className = "btn btn-primary btn-sm";
      saveBtn.textContent = "저장";
      saveBtn.addEventListener("click", function () {
        var next = loadTodos();
        var t = next.find(function (x) {
          return x.id === todo.id;
        });
        if (!t) return;
        var newText = textField.value.trim();
        if (!newText) {
          textField.focus();
          return;
        }
        var dueRaw = dueField.value.trim();
        var newDue = dueRaw === "" ? null : normalizeDueDate(dueRaw);
        if (dueRaw !== "" && newDue === null) {
          dueField.focus();
          return;
        }
        t.text = newText;
        t.dueDate = newDue;
        editingId = null;
        saveTodos(next);
        render(next);
      });

      var cancelBtn = document.createElement("button");
      cancelBtn.type = "button";
      cancelBtn.className = "btn btn-secondary btn-sm";
      cancelBtn.textContent = "취소";
      cancelBtn.addEventListener("click", function () {
        editingId = null;
        render(loadTodos());
      });

      editActions.appendChild(saveBtn);
      editActions.appendChild(cancelBtn);

      editWrap.appendChild(textField);
      editWrap.appendChild(dueRow);
      editWrap.appendChild(editActions);
      main.appendChild(editWrap);

      li.appendChild(cb);
      li.appendChild(main);

      var delEdit = document.createElement("button");
      delEdit.type = "button";
      delEdit.className = "btn btn-danger btn-sm";
      delEdit.textContent = "삭제";
      delEdit.addEventListener("click", function () {
        editingId = null;
        var next = loadTodos().filter(function (x) {
          return x.id !== todo.id;
        });
        saveTodos(next);
        render(next);
      });
      li.appendChild(delEdit);

      focusEditField(textField);

      function cancelEdit() {
        editingId = null;
        render(loadTodos());
      }
      function onTextKeys(e) {
        if (e.key === "Escape") {
          e.preventDefault();
          cancelEdit();
        } else if (e.key === "Enter") {
          e.preventDefault();
          saveBtn.click();
        }
      }
      function onDueKeys(e) {
        if (e.key === "Escape") {
          e.preventDefault();
          cancelEdit();
        }
      }
      textField.addEventListener("keydown", onTextKeys);
      dueField.addEventListener("keydown", onDueKeys);
    } else {
      var span = document.createElement("span");
      span.className = "todo-text" + (todo.completed ? " done" : "");
      span.textContent = todo.text;
      main.appendChild(span);

      if (todo.dueDate) {
        var dueEl = document.createElement("span");
        dueEl.className = "todo-due-meta";
        if (isOverdue(todo.dueDate, todo.completed)) {
          dueEl.className += " todo-due-meta--overdue";
          dueEl.textContent = "마감: " + formatDueLabel(todo.dueDate) + " (기한 지남)";
        } else {
          dueEl.textContent = "마감: " + formatDueLabel(todo.dueDate);
        }
        main.appendChild(dueEl);
      }

      var actions = document.createElement("div");
      actions.className = "todo-item-actions";

      var editBtn = document.createElement("button");
      editBtn.type = "button";
      editBtn.className = "btn btn-edit btn-sm";
      editBtn.textContent = "편집";
      editBtn.addEventListener("click", function () {
        editingId = todo.id;
        render(loadTodos());
      });

      var del = document.createElement("button");
      del.type = "button";
      del.className = "btn btn-danger btn-sm";
      del.textContent = "삭제";
      del.addEventListener("click", function () {
        var next = loadTodos().filter(function (x) {
          return x.id !== todo.id;
        });
        if (editingId === todo.id) editingId = null;
        saveTodos(next);
        render(next);
      });

      actions.appendChild(editBtn);
      actions.appendChild(del);

      li.appendChild(cb);
      li.appendChild(main);
      li.appendChild(actions);
    }

    return li;
  }

  function render(todos) {
    var stillExists = editingId && todos.some(function (t) {
      return t.id === editingId;
    });
    if (editingId && !stillExists) {
      editingId = null;
    }

    listPending.innerHTML = "";
    listCompleted.innerHTML = "";

    var pending = todos.filter(function (t) {
      return !t.completed;
    });
    pending.sort(comparePendingByDue);

    var completed = todos.filter(function (t) {
      return t.completed;
    });

    pending.forEach(function (todo) {
      listPending.appendChild(createTodoRow(todo));
    });
    completed.forEach(function (todo) {
      listCompleted.appendChild(createTodoRow(todo));
    });

    var total = todos.length;
    emptyState.hidden = total !== 0;
    emptyPending.hidden = pending.length > 0 || total === 0;
    emptyCompleted.hidden = completed.length > 0 || total === 0;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (editingId) return;
    var text = input.value.trim();
    if (!text) return;

    var dueRaw = dueInput.value.trim();
    var dueDate = dueRaw === "" ? null : normalizeDueDate(dueRaw);
    if (dueRaw !== "" && dueDate === null) {
      dueInput.focus();
      return;
    }

    var todos = loadTodos();
    todos.push({ id: uid(), text: text, completed: false, dueDate: dueDate });
    saveTodos(todos);
    input.value = "";
    dueInput.value = "";
    render(todos);
    input.focus();
  });

  render(loadTodos());
})();
