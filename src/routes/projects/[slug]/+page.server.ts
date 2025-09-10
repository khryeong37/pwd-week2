import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

const DB = {
	timetable: { title: 'Timetable Helper', body: '나만의 시간표를 정리하는 도구입니다.' },
	gallery: { title: 'Image Gallery', body: '미니 갤러리 예제입니다.' },
	memo: { title: 'Memo Pad', body: '브라우저 로컬에 메모 저장/불러옵니다.' }
} as const;

type Slug = keyof typeof DB; // 'timetable' | 'gallery' | 'memo'

export const load: PageServerLoad = ({ params }) => {
	const key = params.slug as Slug; // ← slug를 DB 키로 좁혀줌
	const item = DB[key];
	if (!item) throw error(404, 'Not found');
	return { item, slug: key };
};
