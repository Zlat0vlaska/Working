import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PostService from "../API/PostService"
import { useFetching } from "../hooks/useFetching"
import Loader from "../Components/UI/Loader/Loader"

const PostIdPage = () => {
	const params = useParams()
	const [post, setPost] = useState({})
	const [comments, setComments] = useState([])
	const [fetchPostId, isLoading, error] = useFetching(async () => {
		const response = await PostService.getById(params.id)
		setPost(response.data)
	})
	const [fetchCommentsId, isComLoading, comError] = useFetching(async () => {
		const response = await PostService.getCommentsByPostId(params.id)
		setComments(response.data)
	})

	useEffect(() => {
		fetchPostId(params.id)
		fetchCommentsId(params.id)
	}, [])
	return (
		<div>
			<h1>Page of post # {params.id}</h1>
			{isLoading
				? <div
				style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
				><Loader /></div>
				: <div> {post.title} </div>
			}

			<h1>Comments</h1>
			{isComLoading
				? <div
				style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
				><Loader /></div>
				: <div>
					{comments.map(com => 
					<div style={{marginTop: 15}}>
						<h5>{com.email}</h5>
						<div>{com.body}</div>
					</div>
					
				)}
				</div>
			}
		</div>
	)
}

export default PostIdPage
