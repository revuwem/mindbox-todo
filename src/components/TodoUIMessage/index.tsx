import { Typography } from "@mui/material";

type Props = React.PropsWithChildren;

const TodoUIMessage: React.FC<Props> = ({ children }) => {
  return (
    <Typography component="p" padding={2}>
      {children}
    </Typography>
  );
};

export default TodoUIMessage;
