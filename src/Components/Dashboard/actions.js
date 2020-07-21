export const FETCH_lIST_REQUEST = "fetch-list-request"
export const FETCH_lIST_SUCCESS = "fetch-list-success"
export const FETCH_lIST_FAIL = "fetch-list-fail"

export const fetchListRequest = () => ({
    type: FETCH_lIST_REQUEST
})

export const fetchListSuccess = (payload) => ({
    type: FETCH_lIST_SUCCESS,
    payload
})

export const fetchListFail = (error) => ({
    type: FETCH_lIST_FAIL,
    error
})

