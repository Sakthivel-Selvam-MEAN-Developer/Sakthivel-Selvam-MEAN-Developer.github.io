import { CurrentUserProfile } from "../CurrentUserProfile/CurrentUserProfile"
import { FollowFooter } from "../FollowFooter/FollowFooter"
import { SuggestedUserList } from "../SuggestedUserList/SuggestedUserList"
import { SuggestionsTitle } from "../SuggestionsTitle/SuggestionsTitle"

const Follow = ({ users }) => {
    return (
        <>
            <CurrentUserProfile />
            <div className="suggestion">
                <SuggestionsTitle />
                <SuggestedUserList users={users} />
            </div>
            <FollowFooter />
        </>
    )
}

export { Follow }