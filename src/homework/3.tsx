import React, { SetStateAction, useState } from "react";

export function FormComponent() {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
}
