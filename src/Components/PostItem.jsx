import React from "react"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const PostItem = function (props) {
    const navigate = useNavigate()

	function transitToPost(id) {
		navigate(`/blog/${id}`, { replace: true })
	  }

	return (
		<div className="post">
			<div className="post__content">
				<strong>
					{props.post.id}. {props.post.title}
				</strong>
				<div>{props.post.body}</div>
			</div>
			<div className="post__btns">
				<Button onClick={() => transitToPost(props.post.id)} variant="Outlined">
					Открыть
				</Button>
				<Button onClick={() => props.remove(props.post)} variant="Outlined">
					Удалить
				</Button>
			</div>
		</div>
	)
}

export default PostItem;
