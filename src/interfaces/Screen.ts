interface Screen {
  show(): void;
  update(): void;
  action(): void;
  break?(): void;
}

export default Screen;
