import { ESLint } from 'eslint';
import type { ScanResult } from '../../types';

/**
 * 格式化 Stylelint 输出结果
 * @param quiet 仅报告错误信息
 */
export function formatESLintResults(results: ESLint.LintResult[], quiet: boolean, eslint: ESLint): ScanResult[] {
  const rulesMeta = eslint.getRulesMetaForResults(results);

  return results
    .filter(({ warningCount, errorCount }) => errorCount || warningCount)
    .map(({
      filePath,
      messages,
      errorCount,
      warningCount,
      fixableErrorCount,
      fixableWarningCount,
    }) => {
      return {
        filePath,
        errorCount,
        warningCount: quiet ? 0 : warningCount,
        fixableErrorCount,
        fixableWarningCount: quiet ? 0 : fixableWarningCount,
        messages: messages
          .map(({ line = 0, column = 0, ruleId, message, fatal, severity }) => {
            return {
              line,
              column,
              rule: ruleId,
              url: rulesMeta[ruleId]?.docs?.url || '',
              message: message.replace(/([^ ])\.$/u, '$1'),
              errored: fatal || severity === 2,
            };
          })
          .filter(({ errored }) => (quiet ? errored : true)),
      }
    })
}