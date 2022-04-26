import DefineOptions from 'unplugin-vue-define-options/vite';
import Icons from 'unplugin-icons/vite';
// import IconsResolver from 'unplugin-icons/resolver';
// import Components from 'unplugin-vue-components/vite';
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';

export default (srcPath: string) => {
  return [
    DefineOptions(),
    Icons({
      compiler: 'vue3',
      customCollections: {
        custom: FileSystemIconLoader(`${srcPath}/assets/svg`)
      },
      scale: 1,
      defaultClass: 'inline-block'
    })
    // Components({
    //   extensions: ['vue'],
    //   dts: 'src/components.d.ts',
    //   resolvers: [ElementPlusResolver(), IconsResolver({ customCollections: ['custom'], componentPrefix: 'icon' })]
    // })
  ];
};
