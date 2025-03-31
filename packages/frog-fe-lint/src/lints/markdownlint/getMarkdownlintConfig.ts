import path from 'path';
import glob from 'glob';
import markdownLint from 'markdownlint';
import markdownLintConfig from 'frog-markdownlint-config';
import type { ScanOptions, PKG, Config } from '../../types';

type LintOptions = markdownLint.Options & { fix?: boolean };

/**
 * 获取 Markdownlint 配置
 */
export function getMarkdownlintConfig(options: ScanOptions, pkg: PKG, config:Config): LintOptions {
  const { cwd, fix } = options;
  if (config.enableMarkdownlint === false) return {};

  const lintConfig: LintOptions = {
    fix: Boolean(fix),
    resultVersion: 3
  }

  if (config.markdownlintOptions) {
    // 若用户传入了stylelintOptions，则用用户的
    Object.assign(lintConfig, config.markdownlintOptions);
  } else {
    // 根据扫描目录下有无 lintrc 文件，若无则使用默认的 lint 配置
    const lintConfigFiles = glob.sync('.markdownlint(.@(yaml|yml|json))', { cwd });
    if (lintConfigFiles.length === 0) {
      lintConfig.config = markdownLintConfig
    } else {
      lintConfig.config = markdownLint.readConfigSync(path.resolve(cwd, lintConfigFiles[0]));
    }

    return lintConfig;
  }
}