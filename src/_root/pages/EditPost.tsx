import PostForm from "@/components/forms/PostForm"
import { useGetPostById } from "@/lib/react-query/queriesAndMutations";
import { useParams } from "react-router-dom"

const EditPost = () => {
  const {id} = useParams();
  const {data: post, isPending} = useGetPostById(id || '')
  console.log(isPending);

  return (
    <div className="flex flex-1">
       <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          

          <img src="/assets/icons/add-post.svg" width={36} height={36} alt="create post" />
          <h2 className="h3-bold md:h2-bold text-left w-full">Edit</h2>

        </div>
        <PostForm action="Update" post={post}/>
       </div>
    </div>
  )
}

export default EditPost