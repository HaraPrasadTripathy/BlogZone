import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import appwriteService from "../appwrite/db";
import { useNavigate,  useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const darkMode = useSelector((state) => state.auth.darkMode)
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div  className="w-full py-8">
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost