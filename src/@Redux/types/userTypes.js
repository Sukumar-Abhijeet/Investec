// @flow

export type State = {
    userName : string
}

export type UpdateUserName = {
    userName : string,
    type : string
}

export type UserNameAction = 
    | UpdateUserName
