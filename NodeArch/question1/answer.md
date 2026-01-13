# Node.js Architecture

Node.js is a JavaScript runtime built on Chrome’s V8 engine. It allows JavaScript to run outside the browser and is designed for building fast, scalable, network-based applications.

## Key Components of Node.js Architecture
- JavaScript Engine (V8)
- Node.js Core APIs
- Native Bindings
- Event Loop
- libuv

---

## JavaScript Engine (V8)
- V8 is the JavaScript engine developed by Google.
- It converts JavaScript code into machine code.
- Provides fast execution using Just-In-Time (JIT) compilation.
- Handles memory management and garbage collection.

---

## Node.js Core APIs
- These are built-in modules provided by Node.js.
- Examples: fs, http, os, path, events.
- Written mostly in JavaScript with some C++ underneath.
- Allow interaction with the system, files, network, etc.

---

## Native Bindings
- Act as a bridge between JavaScript and C++ code.
- Allow Node.js to use low-level system features.
- Used internally to connect Core APIs with libuv.

---

## Event Loop
- The event loop is responsible for handling asynchronous operations.
- It continuously checks for pending tasks and executes callbacks.
- Enables non-blocking I/O behavior in Node.js.

---

## libuv

### What is libuv?
- libuv is a C library used by Node.js.
- It provides an abstraction over OS-level asynchronous operations.

### Why Node.js needs libuv
- JavaScript itself is single-threaded.
- libuv allows Node.js to handle async tasks efficiently.
- Provides cross-platform support for I/O operations.

### Responsibilities of libuv
- Event loop implementation
- Asynchronous file system operations
- Thread pool management
- Network I/O handling
- Timers and signals

---

## Thread Pool

### What is a thread pool?
- A set of background threads managed by libuv.
- Used to execute blocking or CPU-intensive tasks.

### Why Node.js uses a thread pool
- To avoid blocking the main event loop.
- Enables parallel execution of heavy operations.

### Operations handled by the thread pool
- File system operations
- DNS lookups
- Compression and encryption
- Some crypto functions

---

## Worker Threads

### What are worker threads?
- Worker threads allow running JavaScript in parallel threads.
- Each worker has its own event loop and memory.

### Why are worker threads needed?
- To handle CPU-intensive tasks.
- Prevent blocking the main thread.

### Difference between thread pool and worker threads
| Thread Pool | Worker Threads |
|------------|---------------|
| Managed by libuv | Managed by Node.js |
| Used internally | Used by developers |
| For async system tasks | For heavy JS computations |

---

## Event Loop Queues

### Macro Task Queue
- Handles larger async tasks.
- Examples:
  - setTimeout
  - setInterval
  - setImmediate
  - I/O callbacks

### Micro Task Queue
- Handles high-priority tasks.
- Examples:
  - Promises (.then, .catch)
  - process.nextTick

### Execution Priority
- Micro task queue executes before macro task queue.
- Micro tasks are cleared completely before moving to macro tasks.

