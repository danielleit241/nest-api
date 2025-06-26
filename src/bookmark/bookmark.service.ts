import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}
  async getBookmarks(userId: number) {
    var bookmarks = await this.prisma.bookmark.findMany({
      where: {
        userId,
      },
    });
    if (!bookmarks) {
      return 'No bookmarks found';
    }
    return bookmarks;
  }

  async getBookmarkById(userId: number, bookmarkId: number) {
    var bookmark = await this.prisma.bookmark.findFirst({
      where: {
        id: bookmarkId,
        userId,
      },
    });
    if (!bookmark) {
      return 'Bookmark not found';
    }
    return bookmark;
  }
  async createBookmark(userId: number, dto: CreateBookmarkDto) {
    return await this.prisma.bookmark.create({
      data: {
        userId,
        ...dto,
      },
    });
  }

  async updateBookmark(
    userId: number,
    bookmarkId: number,
    dto: EditBookmarkDto,
  ) {
    const bookmark = await this.prisma.bookmark.findUnique({
      where: {
        id: bookmarkId,
      },
    });
    if (!bookmark || bookmark.userId !== userId) {
      throw new ForbiddenException(
        'Bookmark not found or does not belong to user',
      );
    }
    return this.prisma.bookmark.update({
      where: {
        id: bookmarkId,
      },
      data: {
        ...dto,
      },
    });
  }

  async deleteBookmark(userId: number, bookmarkId: number) {
    const bookmark = await this.prisma.bookmark.findUnique({
      where: {
        id: bookmarkId,
      },
    });
    if (!bookmark || bookmark.userId !== userId) {
      throw new ForbiddenException(
        'Bookmark not found or does not belong to user',
      );
    }
    return this.prisma.bookmark.delete({
      where: {
        id: bookmarkId,
      },
    });
  }
}
