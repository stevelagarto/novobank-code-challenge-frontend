export const getAllContacts = () => {
  const url = `${process.env.REACT_APP_BACKEND_URL}/contacts`
  return fetch(url)
    .then(res => res.json())
    .catch(error => {
      console.error('Error fetching contacts', error)
    })
}

export const createContact = (contact) => {
  const url = `${process.env.REACT_APP_BACKEND_URL}/contacts`
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify(contact)
  }

  return fetch(url, options)
    .then(res => res.json())
    .catch(error => {
      console.error('Error fetching contacts', error)
    })
}
