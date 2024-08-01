import { expect, test } from '@playwright/test'

test('smoke', async ({ page }) => {
  await page.goto(
    '/?bool_array=true&str=test&bool_array=false&num=10&bool_array=true'
  )

  await expect(page.getByPlaceholder('string')).toHaveValue('test')
  await expect(page.getByPlaceholder('number')).toHaveValue('10')
  await expect(page.getByLabel('1', { exact: true })).toBeChecked()
  await expect(page.getByLabel('2', { exact: true })).not.toBeChecked()
  await expect(page.getByLabel('3', { exact: true })).toBeChecked()

  await page.getByRole('link', { name: 'Separated Schema' }).click()

  await expect(page.getByPlaceholder('string')).toHaveValue('test')
  await expect(page.getByPlaceholder('number')).toHaveValue('10')
  await expect(page.getByLabel('1', { exact: true })).toBeChecked()
  await expect(page.getByLabel('2', { exact: true })).not.toBeChecked()
  await expect(page.getByLabel('3', { exact: true })).toBeChecked()

  await page.getByRole('link', { name: 'Use with +page.js' }).click()

  await expect(page.getByText('load_str = test', { exact: true })).toBeVisible()
  await expect(page.getByText('load_num = 10', { exact: true })).toBeVisible()
  await expect(
    page.getByText('load_bool_array = [true,false,true]', { exact: true })
  ).toBeVisible()

  await page.getByRole('link', { name: 'Use with +page.server.js' }).click()

  await expect(
    page.getByText('server_str = test', { exact: true })
  ).toBeVisible()
  await expect(page.getByText('server_num = 10', { exact: true })).toBeVisible()
  await expect(
    page.getByText('server_bool_array = [true,false,true]', { exact: true })
  ).toBeVisible()

  await page.goto('/server?str=&num=&bool=')

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

  await expect(page.getByPlaceholder('string')).toHaveValue('')
  await expect(page.getByPlaceholder('number')).toHaveValue('0')
  await expect(page.getByLabel('1', { exact: true })).not.toBeChecked()
  await expect(page.getByLabel('2', { exact: true })).not.toBeChecked()
  await expect(page.getByLabel('3', { exact: true })).not.toBeChecked()

  await page.getByRole('link', { name: 'Single Component' }).click()

  await expect(page.getByPlaceholder('string')).toHaveValue('')
  await expect(page.getByPlaceholder('number')).toHaveValue('0')
  await expect(page.getByLabel('1', { exact: true })).not.toBeChecked()
  await expect(page.getByLabel('2', { exact: true })).not.toBeChecked()
  await expect(page.getByLabel('3', { exact: true })).not.toBeChecked()
})
