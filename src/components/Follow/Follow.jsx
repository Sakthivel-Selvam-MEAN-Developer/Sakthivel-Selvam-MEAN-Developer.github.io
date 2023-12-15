import { CurrentUserProfile } from "../CurrentUserProfile/CurrentUserProfile"
import { FollowFooter } from "../FollowFooter/FollowFooter"
import { SuggestedUserList } from "../SuggestedUserList/SuggestedUserList"
import { SuggestionsTitle } from "../SuggestionsTitle/SuggestionsTitle"

const Follow = ({ users, currentUser }) => {
    return (
        <>
            <CurrentUserProfile currentUser={currentUser}/>
            <div className="suggestion">
                <SuggestionsTitle />
                <SuggestedUserList users={users} />
            </div>
            <FollowFooter />
        </>
    )
}

export { Follow }