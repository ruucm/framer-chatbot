import { getParameterByName } from "ruucm-util"

export const isProd = true

export const endPoint = "https://api.chatbot.co/api"
export const assetsEndPoint = "https://static.chatbot.co"

export const token = getParameterByName("token")
console.log("token", token)

// Animation
export const baseDuration = 0.67
export const muitipleBaseDuration = baseDuration / 2
export const loadingDuration = 1 / 1.5
export const loadingEndAnimDuration = 0.3
export const powerEaseInOut = [0.66, 0.13, 0.36, 0.97]

// intervals
export const chatInterval = isProd ? 0.97 + loadingDuration : 0.1
export const delayBeforeNewQuestion = isProd ? 0.1 : 0
export const delayBeforeNewAnswerType = 1.6
