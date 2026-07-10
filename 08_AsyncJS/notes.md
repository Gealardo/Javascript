# JavaScript Event Loop - Complete Guide

> **Author:** Gealardo  
> **Purpose:** Interview Preparation & Quick Revision  
> **Last Updated:** 2026

---

## 📋 Table of Contents
1. [Introduction](#introduction)
2. [Architecture Overview](#architecture-overview)
3. [Components Deep Dive](#components-deep-dive)
4. [How It Actually Works](#how-it-actually-works)
5. [Microtask vs Task Queue](#microtask-vs-task-queue)
6. [Practical Examples](#practical-examples)
7. [Common Interview Questions](#common-interview-questions)
8. [Key Takeaways](#key-takeaways)

---

## Introduction

JavaScript is **single-threaded** (one Call Stack) but **asynchronous** (non-blocking). This is achieved through the **Event Loop** mechanism.

**The Problem:** How can JavaScript handle multiple operations (API calls, timers, user clicks) if it can only do one thing at a time?

**The Solution:** The Event Loop architecture with Web APIs and Queues.

---

## Architecture Overview

---

## Components Deep Dive

### 1. **Call Stack**

**What it is:** A LIFO (Last In, First Out) data structure that tracks where we are in the program.

**How it works:**
- When a function is called → **pushed** onto the stack
- When a function returns → **popped** from the stack
- Only one function can execute at a time

```javascript
function first() {
    console.log("First");
}

function second() {
    first();
    console.log("Second");
}

function third() {
    second();
    console.log("Third");
}

third();

// Call Stack Evolution:
// 1. third()        → Stack: [third]
// 2. second()       → Stack: [third, second]
// 3. first()        → Stack: [third, second, first]
// 4. console.log    → Stack: [third, second, first, console.log]
// 5. (return)       → Stack: [third, second, first]
// 6. console.log    → Stack: [third, second, console.log]
// 7. (return)       → Stack: [third, second]
// 8. console.log    → Stack: [third, console.log]
// 9. (return)       → Stack: [third]
// 10. (return)      → Stack: []
output 
First
Second
Third