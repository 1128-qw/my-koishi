module.exports = {
  name: 'fix-db',
  apply(ctx) {
    ctx.on('ready', async () => {
      try {
        await ctx.database.remove('chatluna_conversation', {});
        ctx.logger('fix-db').info('Successfully cleared all corrupted chatluna conversations!');
      } catch (e) {
        ctx.logger('fix-db').error('Failed to clear conversations:', e);
      }
    });
  }
};
