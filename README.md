# 🗨️ Anonymous Realtime Chatbot

A lightweight realtime chatbot application where **anonymous users** can create private rooms to chat with one other person. Each room supports a maximum of **2 participants** and is automatically destroyed after **10 minutes** or when either user presses **"destroy"**. Once destroyed, all messages and room data are permanently deleted.

---

## ✨ Features

- **Anonymous chat**: No sign-up or authentication required.
- **Private rooms**: Each room fits max 2 people.
- **Self-destruct logic**:
  - Rooms expire automatically after 10 minutes (Redis TTL).
  - Users can manually destroy a room at any time.
- **Realtime messaging** powered by `@upstash/realtime`.
- **Room sharing**: Rooms are created with a unique ID that can be shared with another user.
- **Clean data lifecycle**: All messages and room data are deleted once the room is destroyed.

---

## 🛠️ Tech Stack

- **Backend**: [Elysia](https://elysiajs.com) – managing endpoints and backend logic.
- **Frontend**: [Eden](https://elysiajs.com/eden) – accessing Elysia APIs from the client.
- **Database**: [Redis](https://redis.io) – storing room and message data as key-value pairs with TTL.
- **Realtime**: [`@upstash/realtime`](https://upstash.com/realtime) – enabling realtime communication between users.
- **State Management**: [React Query](https://tanstack.com/query/latest) – handling client-side data fetching and caching.

---

## 🚀 How It Works

1. **Create a room**
   - An anonymous user creates a room.
   - A unique room ID is generated.
2. **Share the room ID**
   - The ID can be shared with one other user.
   - Only 2 users can join a room.

3. **Chat in realtime**
   - Messages are exchanged instantly using `@upstash/realtime`.

4. **Room destruction**
   - After 10 minutes, Redis TTL automatically deletes the room and its messages.
   - Either user can press **"destroy"** to immediately delete the room and all data.

---

## 🎯 Purpose

The main focus of this project was **learning and experimenting with new technologies**:

- Redis for ephemeral data storage
- Elysia for backend management
- Eden for frontend API access
- Upstash Realtime for realtime communication

---

## 📝 License & Credits

This project is for **educational purposes** and experimentation with new technologies.  
It was an interesting experience to learn and expand knowledge in Redis, Elysia, Eden, and realtime systems, since I never worked with those technologies before.

Idea: **https://www.youtube.com/@joshtriedcoding**
