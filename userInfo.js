function createUserProfiles(names, modifiedNames) {
    const userProfiles = [];
    let id = 1;
    for (let i = 0; i < names.length; i++) {
      const originalName = names[i];
      const modifiedName = modifiedNames[i];
      userProfiles.push({
        originalName,
        modifiedName,
        id,
      });
      id++;
    }
    return userProfiles;
  }

const names = ["John", "Alice", "Bob", "Eve"];
const modifiedNames = ["john", "ALICE", "bOb", "eVe"];

const profiles = createUserProfiles(names, modifiedNames);

console.log(profiles);
  