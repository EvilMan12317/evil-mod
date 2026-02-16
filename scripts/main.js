Events.on(ClientLoadEvent, () => {
  Core.bundle.debug("Nigger");
  Vars.content.each(c => {
    if (!(c instanceof UnlockableContent)) return;
    c.localizedName = "Nigger";
    c.description = "Nigger";
    c.details = "Nigger";
  });
});