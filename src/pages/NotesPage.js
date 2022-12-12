import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

import { Button } from "../components/ui";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";
import { useEffect } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const LogoutButton = styled(Button)`
  position: absolute;
  top: 8px;
  right: 8px;
`;

function NotesPage({ user, notes, onLogout, onDelete, onCreate }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  return (
    <Container>
      <LogoutButton onClick={onLogout}>Logout</LogoutButton>
      <NoteForm onCreate={onCreate} user={user} />
      <NoteList notes={notes} user={user} onDelete={onDelete} />
    </Container>
  );
}

export default NotesPage;
