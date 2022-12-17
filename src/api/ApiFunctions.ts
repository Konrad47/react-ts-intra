import { IModel } from "../models/Model";

const url: string = "http://localhost:5001/tutorials";

export const fetchTutorials = async (): Promise<IModel["tutorials"]> => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err: any) {
    alert(err);
    return err;
  }
};

export const fetchTutorial = async (
  id: number
): Promise<IModel["tutorial"]> => {
  try {
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();
    return data;
  } catch (err: any) {
    alert(err);
    return err;
  }
};

export const addTutorial = async (tutorial: IModel["tutorial"]) => {
  try {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(tutorial),
    });
  } catch (err) {
    alert(err);
  }
};

export const deleteTutorial = async (id: number) => {
  try {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
  } catch (err) {
    alert(err);
  }
};

export const editTutorial = async (
  id: number,
  editTutorial: IModel["tutorial"]
) => {
  try {
    await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(editTutorial),
    });
  } catch (err) {
    alert(err);
  }
};
