export const sortContacts = (contactList) => {
  return contactList.sort((a, b) => {
    if (a.first_name[0].toLowerCase() > b.first_name[0].toLowerCase()) {
      return 1
    }
    if (a.first_name[0].toLowerCase() < b.first_name[0].toLowerCase()) {
      return -1
    }

    return 0
  })
}
