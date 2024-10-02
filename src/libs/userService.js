const API_URL = "https://localhost:7043/api/Users";

// Obtener todos los usuarios
export async function getUsers() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
}

// Obtener un usuario por ID
export async function getUserById(id) {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }
  return response.json();
}

// Crear un nuevo usuario
export async function createUser(userData) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData), // Enviamos los datos como JSON
  });
  if (!response.ok) {
    throw new Error("Failed to create user");
  }
  return response.json();
}

// Actualizar un usuario por ID
export async function updateUser(id, userData) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData), // Enviamos los datos como JSON
  });
  if (!response.ok) {
    throw new Error("Failed to update user");
  }
  return response.json();
}

// Eliminar un usuario por ID
export async function deleteUser(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete user");
  }
  return response.json();
}