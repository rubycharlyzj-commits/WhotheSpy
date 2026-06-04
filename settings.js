import { db } from '../firebase.js';
import { doc, updateDoc } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js';

/**
 * Mengubah kategori kata dalam room
 * @param {string} roomCode - Kode unik room
 * @param {string} category - Kategori baru (contoh: 'makanan', 'benda')
 */
export async function updateRoomCategory(roomCode, category) {
    if (!roomCode || !category) {
        throw new Error('Kode room dan kategori wajib diisi!');
    }

    const roomRef = doc(db, 'rooms', roomCode);
    await updateDoc(roomRef, {
        category: category
    });
}

/**
 * Mengubah durasi timer diskusi dalam room
 * @param {string} roomCode - Kode unik room
 * @param {number} seconds - Durasi baru dalam detik (contoh: 60, 90)
 */
export async function updateRoomTimer(roomCode, seconds) {
    const timerValue = parseInt(seconds, 10);
    if (!roomCode || isNaN(timerValue) || timerValue <= 0) {
        throw new Error('Kode room dan durasi timer harus valid!');
    }

    const roomRef = doc(db, 'rooms', roomCode);
    await updateDoc(roomRef, {
        timer: timerValue
    });
}

/**
 * Mengubah beberapa pengaturan sekaligus (kategori & timer)
 * @param {string} roomCode - Kode unik room
 * @param {Object} settings - Objek berisi pengaturan baru
 * @param {string} [settings.category] - Kategori baru
 * @param {number} [settings.timer] - Durasi timer baru
 */
export async function updateAllRoomSettings(roomCode, settings) {
    if (!roomCode || !settings) {
        throw new Error('Kode room dan data pengaturan wajib diisi!');
    }

    const roomRef = doc(db, 'rooms', roomCode);
    const updates = {};

    if (settings.category !== undefined) {
        updates.category = settings.category;
    }

    if (settings.timer !== undefined) {
        const timerValue = parseInt(settings.timer, 10);
        if (!isNaN(timerValue) && timerValue > 0) {
            updates.timer = timerValue;
        }
    }

    // Jika ada properti yang diubah, lakukan update ke Firestore
    if (Object.keys(updates).length > 0) {
        await updateDoc(roomRef, updates);
    }
}