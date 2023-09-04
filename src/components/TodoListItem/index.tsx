import {
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

type Props = {
  item: Task;
  onChangeStatus: (name: string) => void;
};

const TodoListItem: React.FC<Props> = ({ item, onChangeStatus }) => {
  const handleChangeStatus = () => {
    onChangeStatus(item.name);
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
