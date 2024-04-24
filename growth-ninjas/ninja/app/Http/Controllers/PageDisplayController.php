<?php
 
namespace App\Http\Controllers;
 
use Illuminate\Contracts\View\View;
use App\Repositories\PageRepository;
use Illuminate\Http\Request;

 
class PageDisplayController extends Controller
{
    public function show(string $slug, PageRepository $pageRepository): View
    {
        $page = $pageRepository->forSlug($slug);
 
        if (!$page) {
            abort(404);
        }
 
        return view('site.post', ['item' => $page]);
    }

}