export const GET_CATEGORIES_IN_DEPARTMENT = 'GET_CATEGORIES_IN_DEPARTMENT';
export const GET_CATEGORIES_IN_DEPARTMENT_ERROR = 'GET_CATEGORIES_IN_DEPARTMENT_ERROR';
export const GET_CATEGORIES_IN_DEPARTMENT_SUCCESS = 'GET_CATEGORIES_IN_DEPARTMENT_SUCCESS';


export const getCategoriesInDepartment = (data) => ({
    type: GET_CATEGORIES_IN_DEPARTMENT,
    payload: data
});