import { expect, test } from '@playwright/test'

test('smoke', async ({ page }) => {
  await page.goto(
    '/?bool_array=true&str=test&bool_array=false&num=1&bool_array=true'
  )

  await expect(page.getByText('str = test', { exact: true })).toBeVisible()
  await expect(page.getByText('num = 1', { exact: true })).toBeVisible()
  await expect(
    page.getByText('bool_array = [true,false,true]', { exact: true })
  ).toBeVisible()

  await page.getByRole('link', { name: 'Separated Schema' }).click()

  await expect(page.getByText('page_str = test', { exact: true })).toBeVisible()
  await expect(page.getByText('page_num = 1', { exact: true })).toBeVisible()
  await expect(
    page.getByText('page_bool_array = [true,false,true]', { exact: true })
  ).toBeVisible()

  await page.getByRole('link', { name: 'Use with +page.js' }).click()

  await expect(page.getByText('load_str = test', { exact: true })).toBeVisible()
  await expect(page.getByText('load_num = 1', { exact: true })).toBeVisible()
  await expect(
    page.getByText('load_bool_array = [true,false,true]', { exact: true })
  ).toBeVisible()

  await page.getByRole('link', { name: 'Use with +page.server.js' }).click()

  await expect(
    page.getByText('server_str = test', { exact: true })
  ).toBeVisible()
  await expect(page.getByText('server_num = 1', { exact: true })).toBeVisible()
  await expect(
    page.getByText('server_bool_array = [true,false,true]', { exact: true })
  ).toBeVisible()

  await page.getByRole('textbox').fill('str=&num=&bool=')

  await expect(page.getByText('server_str = ', { exact: true })).toBeVisible()
  await expect(page.getByText('server_num = 0', { exact: true })).toBeVisible()
  await expect(
    page.getByText('server_bool_array = []', { exact: true })
  ).toBeVisible()

  await page.getByRole('link', { name: 'Use with +page.js' }).click()

  await expect(page.getByText('load_str = ', { exact: true })).toBeVisible()
  await expect(page.getByText('load_num = 0', { exact: true })).toBeVisible()
  await expect(
    page.getByText('load_bool_array = []', { exact: true })
  ).toBeVisible()

  await page.getByRole('link', { name: 'Separated Schema' }).click()

  await expect(page.getByText('page_str = ', { exact: true })).toBeVisible()
  await expect(page.getByText('page_num = 0', { exact: true })).toBeVisible()
  await expect(
    page.getByText('page_bool_array = []', { exact: true })
  ).toBeVisible()

  await page.getByRole('link', { name: 'Single Component' }).click()

  await expect(page.getByText('str = ', { exact: true })).toBeVisible()
  await expect(page.getByText('num = 0', { exact: true })).toBeVisible()
  await expect(page.getByText('bool_array = []', { exact: true })).toBeVisible()
})
