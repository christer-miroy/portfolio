// dynamically import image into different components
export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
}

export const getVideoUrl = (path) => {
    return new URL(`/assets/projects/${path}`, import.meta.url).href;
}