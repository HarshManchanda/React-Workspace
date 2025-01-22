// api.js
import axios from "axios";

const BASE_URL = "http://49.50.93.228/api/resource/Employee";

export const fetchEmployees = async (fields = ["name", "status","date_of_birth","date_of_joining","date_of_retirement"], limit = 10000, token) => {
    const config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${BASE_URL}?fields=${JSON.stringify(fields)}&limit=${limit}`,
        headers: {
            Authorization: `Token ${token}`,
        },
    };

    try {
        const response = await axios.request(config);
        return response.data.data; // Return employee data
    } catch (err) {
        console.error("Failed to fetch employees:", err);
        throw new Error("API call failed");
    }
};
