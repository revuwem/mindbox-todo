import {
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { changeTaskStatus } from "@/store/slice/todoSlice";

type Props = {
  item: Task;
};

const TodoListItem: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();
  const handleChangeStatus = () => {
    dispatch(changeTaskStatus(item.uuid));
  };

  return (
    <ListItem disablePadding>
      <ListItemButton
        role={undefined}
        dense
        disableRipple
        onClick={handleChangeStatus}
      >
        <ListItemIcon>
          <Checkbox
            checked={item.done}
            edge="start"
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText>
          {item.done ? <s>{item.name}</s> : item.name}
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export default TodoListItem;
