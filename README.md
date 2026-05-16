# password-generator-api

A simple Express REST API to generate passwords and check password strength.

## Base URL
`http://localhost:3000` (or the port defined by your `PORT` environment variable)

## Endpoints

### 1. Generate Password
Generates a random password based on the provided configuration.

- **URL:** `/generate-password`
- **Method:** `POST`
- **Content-Type:** `application/json`

#### Request Body
The request body should be a JSON object with the following properties:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `length` | `number` | Yes | The length of the generated password. |
| `useUppercase` | `boolean` | Yes | Include uppercase letters (A-Z). |
| `useNumbers` | `boolean` | Yes | Include numbers (0-9). |
| `useSpecialChars` | `boolean` | Yes | Include special characters (e.g., `!@#$`). |

**Example:**
```json
{
  "length": 16,
  "useUppercase": true,
  "useNumbers": true,
  "useSpecialChars": true
}
```

#### Response
Returns a JSON object containing the generated password.

**Example:**
```json
{
  "password": "j8#PqL2@kN5vRc!Z"
}
```

---

### 2. Check Password Strength
Evaluates the complexity and strength of a given password.

- **URL:** `/password-strength`
- **Method:** `POST`
- **Content-Type:** `application/json`

#### Request Body
The request body should be a JSON object with the following property:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `password` | `string` | Yes | The password string to evaluate. |

**Example:**
```json
{
  "password": "mysecretpassword123!"
}
```

#### Response
Returns a JSON object containing the evaluated strength of the password. Possible values are `"Strong"`, `"Medium"`, and `"Weak"`.

- **Strong:** Length $\geq$ 12, includes uppercase, lowercase, numbers, and special characters.
- **Medium:** Length $\geq$ 8, includes either (uppercase and lowercase) OR (numbers and special characters).
- **Weak:** Anything else.

**Example:**
```json
{
  "strength": "Strong"
}
```