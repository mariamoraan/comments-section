import React from 'react'
import data from './data.json'
var comments = data.comments
export function getCommentById(id) {
    for(let i = 0; i<comments.length ; i++){
        if(comments[i].id == id){
            return comments[i]
        }
    }
    return comments[id]
}

export function getMainComments() {
    var mainComments = []
    for(let i = 0; i<comments.length ; i++){
        if(comments[i].replyingTo == undefined){
            mainComments.push(comments[i])
        }
    }
    return mainComments
}

export function deleteComment(commentId){
    for(let i = 0; i<comments.length ; i++){
        if(comments[i].id == commentId){
            comments.splice(i,1)
        }
    }
    return getMainComments()
}

export function addComment(repliedId, comment){
    var commentId = comments.length + 1
    comment.id = commentId
    for(let i=0; i<comments.length ; i++){
        if(comments[i].id == repliedId){
            comments[i].replies.push(commentId)
        }
    }
    comments.push(comment)
    return getMainComments()
}

export function getCurrentUser(){
    return data.currentUser
}

export const CommentsContext = React.createContext(comments);



