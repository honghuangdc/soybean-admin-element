import type { ConfigEnv, PluginOption } from 'vite';
import vue from './vue';
import html from './html';
import unplugin from './unplugin';
import unocss from './unocss';
import mock from './mock';
import visualizer from './visualizer';
import compress from './compress';

/**
 * vite插件
 * @param configEnv - 环境
 * @param srcPath - src路径
 * @param viteEnv - 环境变量配置
 */
export function setupVitePlugins(
  configEnv: ConfigEnv,
  srcPath: string,
  viteEnv: ImportMetaEnv
): (PluginOption | PluginOption[])[] {
  const plugins = [...vue, html(configEnv), ...unplugin(srcPath), unocss, mock];

  if (viteEnv.VITE_VISUALIZER === 'true') {
    plugins.push(visualizer);
  }
  if (viteEnv.VITE_COMPRESS === 'true') {
    plugins.push(compress);
  }

  return plugins;
}
