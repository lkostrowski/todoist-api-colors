# Todoist API colors

Small utility to resolve color codes from Todoist API (projects, labels).

Typescript-first, colors names and IDs area strongly typed based on Todoist docs

## Model

```typescript
type TodoistColor = {
  id: number;
  name: string;
  hexColor: string;
};

type TodoistColorsList = TodoistColor[];
```

## Methods

```typescript
function getTodoistColorByName(name: string): TodoistColor | null;

function getTodoistColorById(id: number): TodoistColor | null;
```