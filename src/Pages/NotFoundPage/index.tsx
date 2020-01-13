import React from 'react'
import { Result } from 'antd'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
	return (
		<Result
			status="404"
			title="404"
			subTitle="Üzgünüm, sanırım aradığın sayfa yok veya biz bulamadık."
			extra={<Link to="/">Ana Sayfa'ya Dön</Link>}
		/>
	)
}
