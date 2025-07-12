<script>
  import SelectionBar from "$lib/selectionBar.svelte"

  let newTask = "";
  let tasks = [];
  let timeRange = ["9AM", "10AM", "11AM", "12PM"];

  function addTask() {
    if (newTask.trim() === "") return;
    tasks = [...tasks, { text: newTask.trim(), done: false, time: "" }];
    newTask = "";
  }

  function toggleDone(index) {
    tasks[index].done = !tasks[index].done;
    tasks = [...tasks]; // trigger reactivity
  }

  function removeTask(index) {
    tasks = tasks.filter((_, i) => i !== index);
  }
</script>

<style>
  .done {
    text-decoration: line-through;
    color: gray;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 1rem;
    background: #f5f5f5;
    padding: 1rem;
    border-radius: 8px;
  }
</style>

<div class="max-w-md mx-auto mt-10">
  <h2 class="text-xl font-bold mb-4 text-center">To-Do List with Time Picker</h2>

  <div class="flex gap-2 mb-4">
    <input
      bind:value={newTask}
      placeholder="New Task"
      class="border px-3 py-2 flex-grow"
      on:keydown={(e) => e.key === 'Enter' && addTask()}
    />
    <button on:click={addTask} class="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
  </div>

  <ul>
    {#each tasks as task, index (index)}
      <li class="flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <input
            type="checkbox"
            checked={task.done}
            on:change={() => toggleDone(index)}
          />
          <span class:done={task.done} class="flex-grow">{task.text}</span>
          <button on:click={() => removeTask(index)} class="text-red-500">❌</button>
        </div>

        <!-- ✅ SelectionBar for each task -->
        <SelectionBar
          options={timeRange}
          selected={task.time}
          bind:value={task.time}
        />
      </li>
    {/each}
  </ul>
</div>
