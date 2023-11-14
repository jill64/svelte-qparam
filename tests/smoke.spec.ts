import { expect, test } from '@playwright/test'

test('smoke', async ({ page }) => {
  await page.goto('/?str=test&num=1&bool=true')

  await expect(
    page.getByText('server_str: test', { exact: true })
  ).toBeVisible()
  await expect(page.getByText('server_num: 1', { exact: true })).toBeVisible()
  await expect(
    page.getByText('server_bool: true', { exact: true })
  ).toBeVisible()

  await expect(page.getByText('page_str: test', { exact: true })).toBeVisible()
  await expect(page.getByText('page_num: 1', { exact: true })).toBeVisible()
  await expect(page.getByText('page_bool: true', { exact: true })).toBeVisible()

  await expect(page.getByText('str: test', { exact: true })).toBeVisible()
  await expect(page.getByText('num: 1', { exact: true })).toBeVisible()
  await expect(page.getByText('bool: true', { exact: true })).toBeVisible()

  await page.getByRole('textbox').fill('str=&num=&bool=')

  await expect(page.getByText('server_str: ', { exact: true })).toBeVisible()
  await expect(page.getByText('server_num: 0', { exact: true })).toBeVisible()
  await expect(
    page.getByText('server_bool: false', { exact: true })
  ).toBeVisible()

  await expect(page.getByText('page_str: ', { exact: true })).toBeVisible()
  await expect(page.getByText('page_num: 0', { exact: true })).toBeVisible()
  await expect(
    page.getByText('page_bool: false', { exact: true })
  ).toBeVisible()

  await expect(page.getByText('str: ', { exact: true })).toBeVisible()
  await expect(page.getByText('num: 0', { exact: true })).toBeVisible()
  await expect(page.getByText('bool: false', { exact: true })).toBeVisible()
})
