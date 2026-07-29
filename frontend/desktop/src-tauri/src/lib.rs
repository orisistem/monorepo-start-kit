use std::sync::atomic::{AtomicI32, Ordering};

static COUNTER: AtomicI32 = AtomicI32::new(0);

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn get_count() -> i32 {
    COUNTER.load(Ordering::Relaxed)
}

#[tauri::command]
fn increment_count() -> i32 {
    COUNTER.fetch_add(1, Ordering::Relaxed) + 1
}

#[tauri::command]
fn reset_count() -> i32 {
    COUNTER.store(0, Ordering::Relaxed);
    0
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, get_count, increment_count, reset_count])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
