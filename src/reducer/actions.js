export const APP_LOADING_STARTED = "app_loading_started"
export const APP_LOADING_COMPLETED = "app_loading_completed"

export const appLoadingStarted = () => ({
    type: APP_LOADING_STARTED
})

export const appLoadingCompleted = () => ({
    type: APP_LOADING_COMPLETED
})
