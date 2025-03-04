import { describe, expect, test } from "vitest";
import axios from "axios";

// test('adds 1 + 2 to equal 3',() => {
//     expect(3).toBe(3);
// })


const BACKEND_URL = "http://localhost:8080";


const USERNAME_1 = "testuser1";
const PASSWORD_1 = "password1";

describe("Signup endpoints", () => {
    test('Double signup doesnt work', async () => {
        const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
            username: USERNAME_1,
            password: PASSWORD_1
        })

        const response1 = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
            username: USERNAME_1,
            password: PASSWORD_1
        })
        
        
        expect(response.status).toBe(200);
        expect(response1.status).toBe(403);
    })
})
