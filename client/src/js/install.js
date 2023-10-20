const butInstall = document.getElementById('buttonInstall');

let installPrompt = null
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault()
  window.installPrompt = event

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  if (!installPrompt) {
    return
  }
  const result = await installPrompt.prompt()
  console.log(`Install prompt was: ${result.outcome}`)
  installPrompt = null
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  window.installPrompt = null
});
