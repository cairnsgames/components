import React, { createContext, useState } from "react";

// create context
const TenantContext = createContext();

const TenantProvider = (props) => {
  const { children } = props;

  if (!props.application) {
    throw new Error("TenantProvider: application prop is required");
  }

  const [tenant, setTenant] = useState(props.application);

  return (
    // the Provider gives access to the context to its children
    <TenantContext.Provider value={{tenant}}>
      {children}
    </TenantContext.Provider>
  );
};

export { TenantContext, TenantProvider };
export default TenantProvider;