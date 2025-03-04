import {describe , expect , test , it} from 'vitest';
import axios from 'axios';

const BACKEND_URL = "http://localhost:8000";

const PHONE_NUMBER_1 = "7824659264"
const NAME_1 = "testuser1";

describe("Signup endpoints", () => {

    it('Double signup doesnt work', async () => {
        const response1 = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
            phone_number: PHONE_NUMBER_1,
        });
        const response2 = await axios.post(`${BACKEND_URL}/api/v1/user/signup/verify`, {
            phone_number: PHONE_NUMBER_1,
            otp: "000000"
        });
        // name: NAME_1
        expect(response1.status).toBe(200);
        expect(response2.status).toBe(200);
        expect(response1.status).not.toBeNull();


        // failure case
        // expect(async () => {
        //     await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
        //         phone_number: PHONE_NUMBER_1,
        //     });
        // }).toThrow();
        
    },)
})
