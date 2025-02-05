import axios from "../plugins/axios";

const courseService = {

    async createCourse(req) {
        try {
            const response = await axios.post('/course', req);
            return response.data;
        } catch (error) {
            console.error("Error creating course:", error);
            throw error;
        }
    },

    async getAllCourses() {
        try {
            const response = await axios.get('/courses');
            return response.data;
        } catch (error) {
            console.error("Error fetching all courses:", error);
            throw error;
        }
    },

    async getCourseById(id) {
        try {
            const response = await axios.get(`/course/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching course with ID ${id}:`, error);
            throw error;
        }
    },

    async updateCourse(id, req) {
        try {
            const response = await axios.patch(`/course/${id}`, req);
            return response.data;
        } catch (error) {
            console.error(`Error updating course with ID ${id}:`, error);
            throw error;
        }
    },

    async deleteCourse(id) {
        try {
            const response = await axios.delete(`/course/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error deleting course with ID ${id}:`, error);
            throw error;
        }
    }
};

export default courseService;