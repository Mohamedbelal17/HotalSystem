import styled from "styled-components";
import { useUser } from "./useUser";
import d from "../../data/img/default-user.jpg";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

function UserAvatar() {
  const { user } = useUser();

  const { avatar, fullName } = user.user_metadata;

  return (
    <StyledUserAvatar>
      <Avatar src={avatar || d} alt={`avatar of ${fullName}`} />
      <span>{fullName || "Mohamed  Adel"}</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
